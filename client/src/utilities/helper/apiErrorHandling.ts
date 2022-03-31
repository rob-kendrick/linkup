export default function handleError(e: any) {
  console.error(e);
  return { error: true, message: e.message, code: e.code };
}
