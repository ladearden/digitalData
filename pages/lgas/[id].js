import {useRouter} from 'next/router'
import Population from '../../components/Population'
import dynamic from 'next/dynamic'
import path from 'path'
import fs from "fs"

export default function LGA({lga, geo}) {
    const router = useRouter()
    const {id} = router.query
    const LGAmap = dynamic(
        () => import('../../components/LGAmap'),
        { 
            loading: () => <p>A map is loading</p>,
            ssr: false } // This line is important. It's what prevents server-side render
      )

    return (<>
    <h1>Armidale Regional council data</h1>
    
    <LGAmap 
    geo={geo}
    />
    <Population></Population>
    </>
    )
}

export async function getStaticProps({params}) {
    // const req = await fetch(`data/${params.id}.json`);
    // const data = await req.json();
    const dataFilePath = path.join(process.cwd(), "public/data", "armidale.json");
    const lgaFp = path.join(process.cwd(), "public/data", "Armidal_Regional_LGAgeo.json");
    //console.log(dataFilePath);     // will be YourProject/jsonFiles/data.json

    const fileContents = fs.readFileSync(dataFilePath, "utf8");
    const lgaFile = fs.readFileSync(lgaFp, "utf8");
    const data = JSON.parse(fileContents);
    const lgaData = JSON.parse(lgaFile);

    return {
        props: {lga: data, geo: lgaData },
    }
}

export async function getStaticPaths() {
    // const req = await fetch(`http://localhost:3000/lgas.json`);
    // const req = await fetch(`data/lgas.json`);
    // const data = await req.json();
    const dataFilePath = path.join(process.cwd(), "public/data", "lgas.json");
    //console.log(dataFilePath);     // will be YourProject/jsonFiles/data.json

    const fileContents = fs.readFileSync(dataFilePath, "utf8");
    const data = JSON.parse(fileContents);

    const paths = data.map(lga => {
        return {params: {id: lga}}
    })

    return {
        paths,
        fallback: false
    };
}