
const PersonalPage = async ({
  params,
}: {
  params: Promise<{ name: string, idx: string }>
}) => {
  const name = (await params).name;
  const idx = (await params).idx;

  return (
    <div></div>
  )
}

export default PersonalPage