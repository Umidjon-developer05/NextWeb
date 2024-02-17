import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return(
    <section className="bg-white flex justify-center items-center h-[100vh]">
     <SignUp />
     </section>
     );
}
