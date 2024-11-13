/*function usePagination() {
	const [page, setPage] = useState(1);
	const itemPerPage = 5;

	const totalItems = residents ? residents.results.length : 0;
	const maxPage = Math.ceil(totalItems / itemPerPage);

	const onPrev = () => {
		if (page > 1) {
			setPage(page - 1);
		}
		setPage(page - 1);
	};

	const onNext = () => {
		if (page < maxPage) {
			setPage(page + 1);
		}
		setPage(page + 1);
	};

	const items = [];

	for (let i = 1; i <= maxPage; i++) {
		items.push(i);
	}

	const currentPageItems = residents
		? residents?.results.slice((page - 1) * itemPerPage, page * itemPerPage)
		: [];

	return [page, onPrev, onNext];
}

export default usePagination;*/
