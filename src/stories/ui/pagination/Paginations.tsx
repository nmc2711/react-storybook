export interface IPageProps {
  page: number;
  totalPages: number;
  handlePages: (page: number) => void;
}
function Pagination({ page, totalPages, handlePages }: IPageProps) {
  const onClickPrev = () => {
    handlePages(page - 1);
  };
  return (
    <div>
      <div>
        <button>이전</button>
      </div>
    </div>
  );
}

export default Pagination;
