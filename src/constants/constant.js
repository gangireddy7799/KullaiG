// Update the path if needed based on your project structure
export const navBarItems = [
  { dragTo: "home", text: "About" },
  { dragTo: "projects", text: "Projects" },
  { dragTo: "skills", text: "Skills" },
  { dragTo: "contact", text: "Contact Me" },
];

export const aboutText = {
  name: 'Vinoth Kumar V',
  p1: "Hello, I'm Vinoth Kumar V, a front-end developer enthusiastic about crafting visually appealing and user-focused digital solutions. With over 2 years of hands-on experience in the field, I'm constantly exploring fresh and inventive approaches to transform my clients' concepts into reality.",
  p2: "I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.",
  p3: "I consistently bring my dedication to design excellence and user-centric philosophy to every project I undertake. I eagerly anticipate the chance to channel my skills and enthusiasm into your upcoming project.",
  yearOfExperience: 2,
  projectsCounts: 6,
};

export const projects = [
  {
    projectName: 'cal.com',
    codeLink: 'https://github.com/VinoV1999/cal.com',
    company: 'cal.com',
    description: 'Experienced problem solver who contributed to the growth and potential of Cal.com by resolving numerous issues. Leveraged expertise to improve functionality and enhance the platform. Committed to delivering impactful solutions that elevate user experiences.'
  },
  {
    projectName: 'Global Banking Platform',
    codeLink: '',
    company: 'TCS',
    description: 'Created and implemented a web application that interacts with SOAP and RESTful web services. Designed the website’s screens and landing pages from concept through deployment.'
  },
  {
    projectName: 'Track My Day',
    codeLink: 'https://github.com/VinoV1999/TrackMyDay',
    company: 'Self Project',
    description: 'This app helps you track your daily activities and provides insights on how you are spending your time. It can help you identify areas where you are wasting time and make changes to be more productive. This app helped me become more productive instead of spending 6-8% of my day on entertainment.'
  },
  {
    projectName: 'Connect the Dots',
    codeLink: 'https://github.com/VinoV1999/ConnectTheDots',
    company: 'Self Project',
    description: 'This is a simple JavaScript dual-player mobile game where you connect three dots to win. Played on a 2x2 grid, each player takes turns placing their coins (Red or Blue). The first player to connect three of their coins in a row (horizontally, vertically, or diagonally) wins the game.'
  },
];

export const skills = [
  { name: 'Next.js', img: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
  { name: 'React.js', img: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  { name: 'TypeScript', img: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
  { name: 'Redux', img: "https://cdn.worldvectorlogo.com/logos/redux.svg" },
  { name: 'Tailwind CSS', img: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" },
  { name: 'HTML', img: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
  { name: 'CSS', img: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
  { name: 'JavaScript', img: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
  { name: 'jQuery', img: "https://cdn.worldvectorlogo.com/logos/jquery-1.svg" },
  { name: 'Firebase', img: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" },
  { name: 'Chart.js', img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFDElEQVR4AcVXVXDjSBT03zHT9zEzfR39HDMz82KYs8zMzMzMzAxeBi86kTySRiOyIzuW+vQqt8wb6qouTc28191iKVQdhMPhG4ih+kBM1T/g3NzGubWdxnVmXFamPCMrYjIXDiwnSYRuOJAYn3q0vPzZWjM+ePDgXYpitFVUYccr0tC4CSeeAJHGNKdohh3UtIuEI3fXqDnTxI+abu1LuB64sCFMG+l0GidAY5qjtYRL4az9iiJ+rrZxNKq+pnJzkeW4MOwKcN2Em0zhQqA1qjGsClCPyo3Fsixeu2LjY8eO3ceYPkCOcc9JpKAFovGEi8sF1VIP9cpM95iqD2SM3XdJY0mSrmeMZ6pcSHS4g8MOy47D8zxcKaiHekmDtLRAM9DOCodj579tjxw5cm05U1e4KR+6GYduWEilKlFNkAZpBYyDtCXGV0aj0evOc76jt8tMqxCGg0TCRU2DNOl2DTzcsjLrjvOd99ukmMqF6cD3UeMgSdo5ial6NGreftEA3okER2VgySYgfBBXBS9JrBqCAtiXGQAAwhH4zQbBz+kFP78v/FmrcTo2Skk0XGSg5xYHbtrHOWBzgZ3/ArsbALGp8HwPwnQvI0DchWc6QOcx8Av7w28xhIJQCGDLfhAiIo1Xx2i4fwDDfQG7bnJwBvjKoPZdIPwesP39YPwWPHkohEUB+CUCJCvhrdgGBIZkXsWh8IsGAt1GI+04aLyyEg8OUvDySBXPDlfx4ggVu9UUCEgngH3/Ahs/BKb8DvRrDPT6B97kfyE4g6RYFwnANC50G16/qUBR/1PmtC3uDGQUwZ1Siow5K/DQ0DieH6FTCDwShClaaYEAfSaw/COgYyb8jFL4TUuBxkVIF7aCkFVIqnmxAJwLWUe67UigdBCZV7GoA/y8AvhZxUDrhnA3fIn2cyfjieE2Hh0Wx2PDTDw9KoW98hFgx+9Au8ZkDD+3KOgrArLzkS5teZkBYkGA9qOqArQcBr+4ayBUQEJVzCoBpv8E7PkQi5e1w79TVuPz8btQMGM+jm/9Exj2K5mfqK9GgGZ08fULBIoDFp4SzCyB3ykL2PY5sOMDYOsXcDd/B+z6CFj2Ffz8oCanuJoBOvx/BApbn9j7M5kdGMz8Fdj9GbCVgnwKhINt1wz4GSVUU90AY4CCzoF5/jliJ06D3yoHWPcNsC8w3/4FMPRfmqfzXv0AXstBQDY1n9j7C4Ronw2M/RM+7fkFzInIyoOXXwwhKRcOQC8jSdEr6K0VHzEFyMghksBFQhTTBUfXxQVrTujEh4yALmwEHud/GdErkl6VbhrQnQroq9cj1bEr0CSL9oDErojUQ72pDl1IK9B0QdqSrK6KRnHd+T+1Y7EbGOPZqm7JCQCaosOcNZfOH4nBzym4pDHVUG26pAXMmXOhMR2kpQozxpieQx6hS+H48eP3K6oYJGmm71CQyDHER4ypEm+aDT+38BxjmqM1qqFaLXIU1BvjFmIKHxwc4Qeu4h9AfkPj5mIrBRgpH3xLGG6PPmQEZOaeMKcxzdEa+ObtMJIeqIdxa4ksq2+EqgtFEz9rwt6fAMANB8aiZahs1Q5onEmkMc3RGqhG4/YBhYtfQjWJSCRyN1P09oqgT01Ajcpwxk+GM24S1OMSaE7RLYepeofDhw/fE6otlJcrzzLGp+r0W5byidDjScSYPu2oJD1Xhz+n4kNVtcKqcMIxTXwUqg/s3r37RmJ1NP4Dh+C1xvAl0O0AAAAASUVORK5CYII=" },
];
