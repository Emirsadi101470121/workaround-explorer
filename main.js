import {
  getAverageSalaryByRole,
  getAverageSalaryByCompany,
  getSalaryAtCompany,
  getIndustryAverageSalary
} from './modules/workAroundModule.js';

const resultsSection = document.getElementById('resultsSection');
const analyzeBtn = document.getElementById('analyze');

analyzeBtn.addEventListener('click', () => {
  resultsSection.innerHTML = ''; // Clear previous results

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
      label: 'Industry Average Salary',
      value: getIndustryAverageSalary(), // ✅ fixed name
    },
    {
      label: 'Salary at Company (Software Engineer at Big Tech Inc)',
      value: getSalaryAtCompany('Software Engineer', 'Big Tech Inc'),
    }
  ];

  data.forEach(({ label, value }) => {
    const item = document.createElement('div');
    item.className = 'bg-zinc-700 rounded-lg p-4 shadow hover:bg-zinc-600 transition';
    item.innerHTML = `
      <h2 class="text-lg font-semibold text-lime-300">${label}</h2>
      <p class="text-xl font-bold text-white mt-2">$${Number(value).toLocaleString()}</p>
    `;
    resultsSection.appendChild(item);
  });
});
