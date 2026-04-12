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