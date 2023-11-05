import getWikiResult from "@/lib/getWikiResult";
import Item from "./components/item";

export async function generateMetadata({params}){
  const wikiData = getWikiResult(params.search);
  const data = await wikiData;
  const displayTerm = params.search.replaceAll('%20',' ' );

   if(!data?.query?.pages){
    return{
      title:`${displayTerm} Not found`
    }
   }

  return{
    title:`${displayTerm}`,
    description : `Search results is ${displayTerm}`
  }
}


export default async function page({params}) {
    const wikiData = getWikiResult(params.search);
    const data = await wikiData;
    const result = data?.query?.pages;
    

  return (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {result ? Object.values(result).map(res=>{
        return <Item key={result.pageid} result={res}/>
      }):
        <h2 className="p-2 text-black">
          {`${params.search} is Not Found`}
        </h2>
      }
    </main>
  )
}