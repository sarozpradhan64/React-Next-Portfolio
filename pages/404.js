// 404.js
import Link from 'next/link'
import SrzLayout from '../components/SrzLayout'

export default function FourOhFour() {
  return <>
      <SrzLayout isContactPage={true}>
    <div className='d-flex justify-content-center flex-column align-items-center' style={{minHeight:'80vh'}}>
        <h1 className='text-white display-3'>Are You Lost?</h1>
        <h4 className='text-white'>404! Page Not Found 😵🤪</h4>
    </div>
    </SrzLayout>
  </>
}