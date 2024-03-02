import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./styles.module.css";
import { IconButton } from "@chakra-ui/react";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const Pagination = ({ pageCount, handlePageChange, selected, page }) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      forcePage={selected}
      previousLabel={
        page > 1 && (
          <IconButton
            icon={<MdArrowBackIosNew color="white" />}
            _hover={{
              opacity: 0.8,
            }}
          />
        )
      }
      nextLabel={
        <IconButton
          icon={<MdArrowForwardIos color="white" />}
          _hover={{
            opacity: 0.8,
          }}
          isDisabled={pageCount === 1}
        />
      }
      onPageChange={handlePageChange}
      breakLabel={"..."}
      activeClassName={styles.paginationActive}
      disabledClassName={styles.pagination__link_disabled}
      containerClassName={styles.pagination}
    />
  );
};

export default Pagination;
