import React from "react";

const Footer = () => {
  const year = new Date(Date.now()).getFullYear();
  return (
    <footer className="flex justify-between items-end text-sm py-2">
      <div className="flex gap-3">
        <div>
          <h3 className="font-bold">Let&apos;s Chat</h3>
          <ul className="flex gap-1 dark:text-blue-400 text-blue-600">
            <li>
              <a href="mailto:jennifer.tieuu@gmail.com">Email</a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jennifertieu/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/jteacodes"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        {year} ©{" "}
        <a
          href="https://jennifertieu.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jennifer Tieu
        </a>
      </div>
    </footer>
  );
};

export default Footer;
