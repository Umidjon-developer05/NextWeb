import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return  (
  <section className="bg-white flex justify-center items-center h-[100%]">
 
        <SignIn/>
  </section>
  );
}
