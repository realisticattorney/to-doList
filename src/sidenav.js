const navTabs = ['Today', 'Next 7 days', 'Past tasks'];
const sideNavbar = () => {
  const content = document.querySelector('#content');
  const div = document.createElement('div');
  const sidenav = document.createElement('sidenav');
  sidenav.className = 'sidenav';
  const ul = document.createElement('ul');
  navTabs.map((tab) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.innerHTML = tab;
    a.id = tab.toLocaleLowerCase();
    a.href = '#';
    li.appendChild(a);
    ul.appendChild(li);
    return true;
  });
  div.appendChild(ul);
  sidenav.appendChild(div);
  content.appendChild(sidenav);
};

export default sideNavbar;

