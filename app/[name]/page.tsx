import path from 'path';
import fs from "fs/promises";
import MdxRenderer from '@/components/MdxRenderer';
;

const PersonalPage = async ({
    params,
  }: {
    params: Promise<{ name: string }>
  }) => {
const name = (await params).name;
let mdxContent: any;
// MDX 파일을 읽어서 내용을 반환
try {
      const filePath = path.resolve(
        process.cwd(),
        "content",
        "member",
        name,
        "README.mdx"
      );
      mdxContent = await fs.readFile(filePath, {encoding: "utf-8"});

    } catch (error) {
      console.error(`⚠️ Failed to fetch README for ${name}`, error);
    }

return <MdxRenderer mdxContents={[{title: '', content: mdxContent}]} />;
};

export default PersonalPage;
