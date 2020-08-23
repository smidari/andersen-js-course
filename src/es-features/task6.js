/**
 * Просто преобразовать содержимое функции task6Old под современный код
 *
 * Пример вызова
 * console.log(task6Old()); -> ['Max', 100, 'Admin', false, '1']
 */

export function task6Old() {
  function userModule() {
    return {
      name: 'Max',
      value: 100,
      role: { name: 'Admin' },
      cases: [{ id: '1' }],
    };
  }

  const tmp = userModule();
  const { name } = tmp;
  const { value } = tmp;
  const role = tmp.role.name;
  const isActive = tmp.isActive === undefined ? false : tmp.isActive;
  const firstCaseId = tmp.cases[0].id;

  return [name, value, role, isActive, firstCaseId];
}

// Напишите реализацию функции task6Old на ES6+ ниже этого комментария.
// При желании, можете использовать стрелочную функцию, вместо обычной

export const task6New = () => {
  const userModule = () => ({
    name: 'Max',
    value: 100,
    role: { name: 'Admin' },
    cases: [{ id: '1' }],
  });

  const {
    name,
    value,
    role: { name: role },
    isActive = false,
    cases: [{ id }],
  } = userModule();
  return [name, value, role, isActive, id];
};
