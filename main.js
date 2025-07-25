import {
  getRoles,
  getCompanies,
  getAverageSalaryByRole,
  getAverageSalaryByCompany,
  getSalaryAtCompany,
  getIndustryAverageSalary
} from './modules/salaryData.js';


// UI elements
const roleSelect = document.getElementById('roleSelect');
const companySelect = document.getElementById('companySelect');
const analyzeBtn = document.getElementById('analyze');
const resultsSection = document.getElementById('resultsSection');

// Populate dropdowns
getRoles().forEach(role => {
  const option = document.createElement('option');
  option.value = role;
  option.textContent = role;
  roleSelect.appendChild(option);
});

getCompanies().forEach(company => {
  const option = document.createElement('option');
  option.value = company;
  option.textContent = company;
  companySelect.appendChild(option);
});

// Button click handler
analyzeBtn.addEventListener('click', () => {
  const role = roleSelect.value;
  const company = companySelect.value;

  if (!role || !company || role === "Select Role" || company === "Select Company") {
    resultsSection.innerHTML = `<p class="text-red-400 font-semibold">Please select both a role and a company.</p>`;
    return;
  }

  resultsSection.innerHTML = ''; // Clear old results

  const data = [
    {
      label: `Average Salary by Role (${role})`,
      value: getAverageSalaryByRole(role),
    },
    {
      label: `Average Salary by Company (${company})`,
      value: getAverageSalaryByCompany(company),
    },
    {
      label: `Industry Average Salary`,
      value: getIndustryAverageSalary(),
    },
    {
      label: `Salary at Company (${role} at ${company})`,
      value: getSalaryAtCompany(role, company),
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
