export const githubApi = 'https://api.github.com/repos/MestreALMO/';
export const githubLink = 'https://github.com/MestreALMO/';

const arrayProjects = [
  'Movies-Website',
  'Add-Remove-Mark-and-Mark-off-With-ReactJS',

  'My-Portfolio',
  'Github_Explorer',

  'MestreALMO.github.io',
  'Tests-With-useState-useEffect-useRef',

  // 'Tic-Tac-Toe-React-in-JS',
  // 'ReactJS-with-TypeScript-Template',

  // 'Retractable-Accordion',
  // 'MealPlus-web',
];
arrayProjects.length % 2 !== 0 &&
  arrayProjects.splice(arrayProjects.length - 1, 1);
export const projects = arrayProjects;
