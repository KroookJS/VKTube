import React from "react";
import styles from './Pagination.module.scss'



type TProps = {
  curentPage?: number;
  total?: number;
  handlePaginationChange?: any;
  handlePaginationChangeBack?: any;
};
let isBack = true;

const PaginationNavigeteMem: React.FC<TProps> = ({
  curentPage,
  total,
  handlePaginationChange,
  handlePaginationChangeBack,
}) => (
  <>
    <div
      style={{
        display: "flex",
        gap: 50,
        padding: "0 20px",
        maxWidth: "80%",
        margin: "0 auto",
      }}
    >
      <button className={styles.paginationBtnBack} onClick={handlePaginationChangeBack}>
        Back
      </button>
      <button className={styles.paginationBtnNext} onClick={() => handlePaginationChange()}>
        Next
      </button>
    </div>
  </>
);
const PaginationNavigete = React.memo(PaginationNavigeteMem);
export default PaginationNavigete;
