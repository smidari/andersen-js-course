/**
 * Просто преобразовать содержимое функции task8Old под современный код,
 * а именно, содержимое метода calculateNumsFive
 *
 * Пример вызова
 * console.log(task8Old()); -> [0, 5, 10, 15]
 */

export function task8Old() {
  const obj = {
    nums: [0, 2, 5, 10, 15],
    fives: [],
    calculateNumsFive() {
      const self = this;
      this.nums.forEach(v => {
        if (v % 5 === 0) {
          self.fives.push(v);
        }
      });

      return self.fives;
    },
  };

  return obj.calculateNumsFive();
}

// Напишите реализацию функции task8Old на ES6+ ниже этого комментария.
// При желании, можете использовать стрелочную функцию, вместо обычной

export function task8New() {}
