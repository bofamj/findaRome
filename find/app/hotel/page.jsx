import Property from "../components/Property";
import Paginations from "../components/Paginations";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function Hotels() {
  const data = await prisma.hotels.findMany();
  //const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  return (
    <main className=" min-h-screen px-24 mt-20  text-slate-800  bg-gray-100 dark:bg-zinc-900">
      <Property data={data} pageSize={pageSize} />
      <Paginations items={data.length} pageSize={pageSize} />
    </main>
  );
}
