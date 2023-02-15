import SectionLayout from '../layouts/SectionLayout';

const frontSkills = [
  {
    name: 'HTML5',
    imgURL: 'https://cdn.cdnlogo.com/logos/h/84/html.svg',
  },
  {
    name: 'CSS3',
    imgURL: 'https://cdn.cdnlogo.com/logos/c/18/css.svg',
  },
  {
    name: 'JavaScript',
    imgURL: 'https://cdn.cdnlogo.com/logos/j/44/javascript.svg',
  },
  {
    name: 'React',
    imgURL: 'https://cdn.cdnlogo.com/logos/r/63/react.svg',
  },
  {
    name: 'Next',
    imgURL: 'https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png',
  },
  {
    name: 'Expo',
    imgURL: 'https://seeklogo.com/images/E/expo-logo-01BB2BCFC3-seeklogo.com.png',
  },
];

const backSkills = [
  {
    name: 'Node',
    imgURL: 'https://cdn.cdnlogo.com/logos/n/94/nodejs-icon.svg',
  },
  {
    name: 'Express.js',
    imgURL:
      'https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png',
  },
  {
    name: 'MySQL',
    imgURL: 'https://cdn.cdnlogo.com/logos/m/10/mysql.svg',
  },
  {
    name: 'MongoDB',
    imgURL: 'https://cdn.cdnlogo.com/logos/m/30/mongodb-icon.svg',
  },
];

export default function Skills() {
  return (
    <SectionLayout id="skills" className="pb-8">
      <div className="flex flex-col flex-1 gap-4 h-full px-6 pt-2">
        <h2 className="text-2xl">Skills</h2>
        <div className="flex flex-col flex-1 md:flex-row gap-8 md:h-full">
          <div className="h-1/2 md:h-full md:w-1/2 bg-slate-500 bg-opacity-30 p-2 rounded-xl flex flex-col gap-4">
            <h3 className="text-center text-2xl">Front-end</h3>
            <div className="flex justify-center gap-8 flex-wrap">
              {frontSkills.map((tech, index) => (
                <div className="flex flex-col items-center gap-4" key={`${tech.name}${index}`}>
                  <figure className="w-8 h-8 md:w-12 md:h-12">
                    <img
                      key={`${index}${tech.name}`}
                      src={tech.imgURL}
                      alt={tech.name}
                      className="object-contain"
                    />
                  </figure>
                  <p>{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="h-1/2 md:h-full md:w-1/2 bg-slate-500 bg-opacity-30 p-4 rounded-xl flex flex-col gap-4">
            <h3 className="text-center text-2xl">Back-end</h3>
            <div className="flex justify-center gap-8 flex-wrap">
              {backSkills.map((tech, index) => (
                <div className="flex flex-col items-center gap-4" key={`${tech.name}${index}`}>
                  <figure className="w-8 h-8 md:w-12 md:h-12">
                    <img
                      key={`${index}${tech.name}`}
                      src={tech.imgURL}
                      alt={tech.name}
                      className="object-contain"
                    />
                  </figure>
                  <p>{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
