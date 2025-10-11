document.getElementById('quoteForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const serviceType = document.getElementById('serviceType').value;
  if (!serviceType) {
    alert("Please select a service type.");
    return;
  }

  const visits = parseInt(document.getElementById('visits').value, 10) || 0;
  const windows = parseInt(document.getElementById('windows').value, 10) || 0;
  const garage = parseInt(document.getElementById('garage').value, 10) || 0;
  const large = parseInt(document.getElementById('largeRoom').value, 10) || 0;
  const small = parseInt(document.getElementById('smallRoom').value, 10) || 0;

  let baseRate = 0;
  switch (serviceType) {
    case 'basic':
      baseRate = 75;
      break;
    case 'deep':
      baseRate = 100;
      break;
    case 'move':
      baseRate = 150;
      break;
    case 'garage':
      baseRate = 75;
      break;
    case 'largeRoom':
      baseRate = 50;
      break;
    case 'smallRoom':
      baseRate = 30;
      break;
  }

  const windowRate = 5;
  const garageRate = serviceType === 'garage' ? 0 : 75;
  const largeRate = serviceType === 'largeRoom' ? 0 : 50;
  const smallRate = serviceType === 'smallRoom' ? 0 : 30;

  const total =
    (baseRate * visits) +
    (windowRate * windows) +
    (garageRate * garage) +
    (largeRate * large) +
    (smallRate * small);

  document.getElementById('quoteResult').textContent = `Estimated Quote: $${total.toFixed(2)}`;
});

// blog posting logic
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('blogForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const author = document.getElementById('author').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    if (!author || !title || !content) return;

    const post = document.createElement('div');
    post.classList.add('post');
    post.innerHTML = `
      <h4>${title}</h4>
      <p><em>Posted by ${author}</em></p>
      <p>${content}</p>
    `;

    document.getElementById('postsContainer').prepend(post);
    document.getElementById('blogForm').reset();
  });
});

document.querySelector('.hamburger').addEventListener('click', function () {
  document.querySelector('.nav_menu_items').classList.toggle('show');
});
