// import { promises as fs } from 'fs';
// import { NextResponse } from 'next/server'

// export async function GET(request) {
    
//     try{
//         const file = await fs.readFile(process.cwd() + '/src/data/workData.json');
//         const data = await JSON.parse(file);
    
//         return NextResponse.json(data , {status:200})
//     }
//     catch(err){
//         return NextResponse.json({ err }, {status:200})
//     }

//   }
