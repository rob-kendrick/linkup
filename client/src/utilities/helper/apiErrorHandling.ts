export default function handleError(e: any) {
  console.log(e);
  return { error: true, message: e.message, code: e.code };
}
