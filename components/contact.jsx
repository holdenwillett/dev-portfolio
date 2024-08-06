export default function Contact (props) {
    return (
        <div id={props.id}>
          <div className="p-10 footer font-mono bg-gray-800 text-neutral-content">
            <div>
            </div>
            <h1 className="mb-5 text-4xl font-light justify-center">
              Contact <span className="font-medium">Me</span>
            </h1> 
            <div>
              <span className="footer-title">Socials</span> 
              <a href="https://www.linkedin.com/in/holdenwillett" target="_blank" rel="noopener noreferrer" className="link link-hover">LinkedIn</a> 
              <a href="https://github.com/holdenwillett" target="_blank" rel="noopener noreferrer" className="link link-hover">GitHub</a> 
            </div> 
           <div>
            <span className="footer-title">Emails</span> 
            <a href="mailto:htwillett8@gmail.com"className="link link-hover">htwillett8@gmail.com (Work) </a>
            <a href="mailto:htwillett@uiowa.edu"className="link link-hover">htwillett@uiowa.edu (Academic)</a>

          </div>
          <div>
            <span className="footer-title">Resume</span> 
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="link link-hover">Click here</a> 
          </div>
      </div>
      </div>    
    )
}