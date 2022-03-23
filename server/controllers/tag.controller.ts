import { Request, Response } from 'express';
import prisma from '../db';

const getAllTags = async (req: Request, res: Response) => {
  try {
    const allTags = await prisma.tag.findMany({});
    res.status(200).send({ data: allTags });
  } catch (err) {
    res.status(404).send({ error: err });
  }
};

const createTag = async (req: Request, res: Response) => {
  try {
    const newTag = await prisma.tag.create({ data: req.body });
    console.log(newTag);
    res.status(200).send({ data: newTag });
  } catch (err) {
    console.log(err);

    res.status(404).send({ error: err });
  }
};

const deleteTag = async (req: Request, res: Response) => {
  try {
    const tagId = Number(req.params.tagid);
    const delTag = await prisma.tag.delete({
      where: {
        id_tag: tagId,
      },
    });
    res.status(200).send({ data: delTag });
  } catch (err) {
    res.status(404).send({ error: err });
  }
};

export default {
  getAllTags,
  createTag,
  deleteTag,
};
