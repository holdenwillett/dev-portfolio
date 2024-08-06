export default function About (props) {
  return (
    <div id={props.id} className="bg-sky-white h-auto md:px-24 md:py-12">
    <div className="flex flex-col md:flex-row-reverse">
      <div className="mt-10 mb-5">
        <img src="/pfp.png" className="rounded-full scale-75 md:scale-100 shadow-2xl"/>
      </div>
      <div className="text-gray-800 text-center font-mono px-6 md:text-left">
              <h1 className="mb-5 text-4xl">
              About <span className="font-bold">Me</span>
              </h1> 
              <p className="my-5 text-lg lg:pr-24">Hey! Im Holden Willett, an undergraduate student at <span className="font-bold">The University of Iowa</span> majoring in Computer Science and Engineering. I am passionate about software development and eager to expand my knowledge in hardware, particularly in embedded devices. I am very excited to learn and take on new challenges in the engineering field. </p>
              <p className="my-5 text-lg lg:pr-24">I recently completed a highly rewarding internship at Caseys, where I served as a Software Engineer Intern on the Supply Chain team. Currently, I am back at school and continuing to work on various personal projects.</p>
              <h3 className="mb-2 text-l">Looking to reach me for work, research, or just to chat? I dont mind! Feel free to <a className="underline" href="#contact">contact</a> me!</h3>
              <h3 className="mb-2 italic text-[0.9rem]">What about my resume? <a className="underline" href="#contact">click me!</a></h3>
          </div>
        </div>
      </div>
  )   
}