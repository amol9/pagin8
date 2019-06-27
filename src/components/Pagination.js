
import React from 'react';

function Pagination ({ setPage, postsPerPage, postsCount, curPage }) {
    let pages = []
    for(let i = 1; i <= (Math.ceil(postsCount/postsPerPage)); i++) {
        pages.push(i)
    }

    return (
        <footer class="fixed-bottom">
            <div class="d-flex justify-content-center">
                <nav>
                    <ul class="pagination">
                        { pages.map((n) => (
                            <li class={n == curPage ? "page-item active" : "page-item"} key={n}>
                                <a class="page-link" href="#" onClick={() => setPage(n)}>{n}</a>
                            </li>)) }
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Pagination;