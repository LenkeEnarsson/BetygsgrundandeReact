import React from 'react'

function paginator() {
  return (
    <>
                <div className="pageNav">
                <div className="Paginator">
                    <a className="PaginatorChoice Disabled" id='paginatorStart'>&lt;&lt;</a>
                    <a className="PaginatorChoice Disabled" id='paginatorBack'> &lt;</a>
                    <p className="PageInfo" id="PageInfo"></p>
                    <a className="PaginatorChoice" id='paginatorForward'>&gt;</a>
                    <a className="PaginatorChoice" id='paginatorEnd'>&gt;&gt;</a>
                </div>
            </div>
    </>
  )
}

export default paginator

/*
DisableButtons(currentPage);
const showResults = document.querySelector("#PageInfo");
showResults.innerHTML = `${currentPage + 1}/${maxPage + 1} (${totalGroups}st)`;

<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>


const start = document.getElementById('paginatorStart');
const back = document.getElementById('paginatorBack');
const forward = document.getElementById('paginatorForward');
const end = document.getElementById('paginatorEnd');
start.addEventListener('click', () => Navigate('start'));
back.addEventListener('click', () => Navigate('back'));
forward.addEventListener('click', () => Navigate('forward'));
end.addEventListener('click', () => Navigate('end'));

DisableButtons(pageNr);

async function Navigate(change) {
    if (typeof change !== 'string' && Object.keys(change).length === 0) return;
    let pageNr = currentPage;

    if (typeof change === 'string') {
        // eslint-disable-next-line default-case
        switch (change) {
            case 'start': pageNr = 0; break;
            case 'back': pageNr = pageNr - 1; break;
            case 'forward': pageNr = pageNr + 1; break;
            case 'end': pageNr = maxPage; break;
        }
    }
    if (pageNr < 0) pageNr = 0;
    if (pageNr > maxPage) pageNr = maxPage;

    document.querySelector('#GroupsList').innerHTML = '';

    if (savedFilter === emptyFilter)
        loadGroups(false, pageNr);
    else
        loadGroups(true, pageNr)
}

function DisableButtons(pageNr) //Paginator buttons
{
    if (pageNr === '0' || pageNr === 0) {
        start.classList.add("Disabled");
        back.classList.add("Disabled");
        forward.classList.remove("Disabled");
        end.classList.remove("Disabled");
    }
    else if (pageNr == maxPage) {
        forward.classList.add("Disabled");
        end.classList.add("Disabled");
        start.classList.remove("Disabled");
        back.classList.remove("Disabled");
    }
    else {
        start.classList.remove("Disabled");
        back.classList.remove("Disabled");
        forward.classList.remove("Disabled");
        end.classList.remove("Disabled");
    }
}
*/