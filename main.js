import { getAverageSalaryByRole, getAverageSalaryByCompany, getAverageSalaryIndustry, getSalaryAtCompany, getIndustryAverageSalary } from './modules/workAroundModule.js';

const resultsSection = document.getElementById('resultsSection');
const analyzeBtn = document.getElementById('analyze');

analyzeBtn.addEventListener('click', () => {
  resultsSection.innerHTML = ''; 

  const data = [
    {
      label: 'Average Salary by Role (Software Engineer)',
      value: getAverageSalaryByRole('Software Engineer'),
    },
    {
      label: 'Average Salary by Company (Big Tech Inc)',
      value: getAverageSalaryByCompany('Big Tech Inc'),
    },
    {
      label: 'Average Salary by Industry (Tech)',
      value: getAverageSalaryIndustry('Tech'),
    },
    {
      label: 'Salary at Company (Software Engineer at Big Tech Inc)',
      value: getSalaryAtCompany('Software Engineer', 'Big Tech Inc'),
    },
    {
      label: 'Industry Average Salary (Software Engineer in Tech)',
      value: getIndustryAverageSalary('Software Engineer', 'Tech'),
    },
  ];

  data.forEach(({ label, value }) => {
    const item = document.createElement('div');
    item.className = 'bg-zinc-700 rounded-lg p-4 shadow hover:bg-zinc-600 transition';
    item.innerHTML = `
      <h2 class="text-lg font-semibold text-lime-300">${label}</h2>
      <p class="text-xl font-bold text-white mt-2">$${value.toLocaleString()}</p>
    `;
    resultsSection.appendChild(item);
  });
});
