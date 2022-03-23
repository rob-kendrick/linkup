import { Request, Response } from 'express';
import prisma from '../db';

interface ErrorOutput {
  error: boolean
  errorMsg: String[],
}

// Get user by ID
const getUserById = async (req: Request, res: Response) => {
  try {
    const userId: number = Number(req.params.userid);
    const foundUser = await prisma.user.findUnique({
      where: {
        id_user: userId,
      },
      include: {
        events_created: {
          select: {
            id_event: true,
            title: true,
          },
        },
        events_participating: {
          select: {
            id_event: true,
            title: true,
          },
        },
      },
    });
    res.status(200).send({ data: foundUser });
  } catch (err) {
    res.status(404).send({ error: err });
  }
};

// Get all users
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await prisma.user.findMany({
      include: {
        events_created: {
          select: {
            id_event: true,
            title: true,
          },
        },
        events_participating: {
          select: {
            id_event: true,
            title: true,
          },
        },
      },
    });
    res.status(200).send({ data: allUsers });
  } catch (err) {
    res.status(404).send({ error: err });
  }
};

// Helper function for validating user bio
const validateUserBio = (body: any) => {
  const output: ErrorOutput = { error: false, errorMsg: [] };
  // Users can have empty bio / might not update bio
  if (!body.bio || body.bio === '') return output;
  // Checking correct input
  if (typeof body.bio !== 'string') {
    output.error = true;
    output.errorMsg.push('Bio is not in string format!');
  }
  // Checking correct length
  if (body.bio.length > 255) {
    output.error = true;
    output.errorMsg.push('Bio too long! (max. 255 characters) ');
  }
  return output;
};

// Helper function for validating user first name
const validateFirstName = (body: any) => {
  const output: ErrorOutput = { error: false, errorMsg: [] };
  // Users may not be updating their name
  if (!body.first_name || body.first_name === '') return output;
  // Input must be correct type
  if (typeof body.first_name !== 'string') {
    output.error = true;
    output.errorMsg.push('first name is not in string format!');
  }
  if (body.first_name.length > 15) {
    output.error = true;
    output.errorMsg.push('First name too long (Max 15 characters!)');
  }
  // Regex for testing if first name has whitespaces
  if (/\s/.test(body.first_name)) {
    output.error = true;
    output.errorMsg.push('First name contains white spaces');
  }
  return output;
};

// Helper function for validating user last name
const validateLastName = (body: any) => {
  const output: ErrorOutput = { error: false, errorMsg: [] };
  // Users may not be updating their name
  if (!body.last_name || body.last_name === '') return output;
  // Input must be correct type
  if (typeof body.last_name !== 'string') {
    output.error = true;
    output.errorMsg.push('last name is not in string format!');
  }
  // Input must be correct length
  if (body.last_name.length > 25) {
    output.error = true;
    output.errorMsg.push('Last name too long (Max 25 characters!)');
  }
  return output;
};

// Edit 1 user Bio by ID
const editUserInfo = async (req: Request, res: Response) => {
  try {
    // Retriving userID
    const userId : number = Number(req.params.userid);
    // Handler for request errors if all fields are present
    if (req.body.bio || req.body.first_name || req.body.last_name) {
      const bioValidation: ErrorOutput = validateUserBio(req.body);
      if (bioValidation.error) {
        return res.status(401).send({ error: bioValidation.errorMsg });
      }
      const firstNameValidation: ErrorOutput = validateFirstName(req.body);
      if (firstNameValidation.error) {
        return res.status(401).send({ error: firstNameValidation.errorMsg });
      }
      const lastNameValidation: ErrorOutput = validateLastName(req.body);
      if (lastNameValidation.error) {
        return res.status(401).send({ error: lastNameValidation.errorMsg });
      }
    }

    // Retriving new user bio
    const newUserBio: string = req.body.bio;
    const newFirstName: string = req.body.first_name;
    const newLastName: string = req.body.last_name;
    // Updating user bio
    const updatedUser = await prisma.user.update({
      where: {
        id_user: userId,
      },
      data: {
        bio: newUserBio,
        first_name: newFirstName,
        last_name: newLastName,
      },
      include: {
        events_created: {
          select: {
            id_event: true,
            title: true,
          },
        },
        events_participating: {
          select: {
            id_event: true,
            title: true,
          },
        },
      },
    });

    return res.status(200).send({ data: updatedUser });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};

// Delete user
const deleteUser = async (req: Request, res: Response) => {
  try {
    const uid: number = Number(req.params.userid);
    const deletedUser = await prisma.user.delete({
      where: {
        id_user: uid,
      },
    });
    res.status(200).send({ data: deletedUser });
  } catch (err) {
    console.log(' : : : ERROR DELETING USER FROM DB : : : ', err);
    res.status(500).send(err);
  }
};

// dev only
const deleteAllUsers = async (req: Request, res: Response) => {
  try {
    const deletedUserCount = await prisma.user.deleteMany({});
    res.status(200).send({ data: deletedUserCount });
  } catch (err) {
    console.log(' : : : ERROR DELETING ALL USERS : : : ', err);
    res.status(500).send({ error: err });
  }
};

export default {
  getUserById,
  getAllUsers,
  editUserInfo,
  deleteUser,
  deleteAllUsers,
};

// deactivated
// // get all events created by a user
// const getUserCreatedEvents = async (req: Request, res: Response) => {
//   try {
//     const userId: number = Number(req.params.userid);
//     const newEvent = await prisma.user.findUnique({
//       where: {
//         id_user: userId,
//       },
//       select: {
//         events_created: {
//           select: {
//             id_event: true,
//             title: true,
//             max_participants: true,
//             date: true,
//             description: true,
//             participants: {
//               select: {
//                 id_user: true,
//                 first_name: true,
//                 profile_picture: true,
//               },
//             },
//           },
//         },
//       },
//     });

//     res.status(200).send({ data: newEvent?.events_created });
//   } catch (err) {
//     res.status(500).send({ error: err });
//   }
// };

// // get all events a user is participating in
// const getUserParticipatingEvents = async (req: Request, res: Response) => {
//   try {
//     const userId: number = Number(req.params.userid);
//     const event = await prisma.user.findUnique({
//       where: {
//         id_user: userId,
//       },
//       select: {
//         events_participating: {
//           select: {
//             id_event: true,
//             title: true,
//             max_participants: true,
//             date: true,
//             description: true,
//             participants: {
//               select: {
//                 id_user: true,
//                 first_name: true,
//                 profile_picture: true,
//               },
//             },
//           },
//         },
//       },
//     });

//     res.status(200).send({ data: event?.events_participating });
//   } catch (err) {
//     res.status(500).send({ error: err });
//   }
// };
