const asyncBar = async () => 'Some string';
export async function task9() {
  console.log(await asyncBar());
}
