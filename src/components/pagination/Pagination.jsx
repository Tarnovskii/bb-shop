import styles from './pagination.module.scss'
import arrow from '../../assets/image/arrow-filled.svg'
import {useCallback, useEffect, useState} from "react";
import {Input} from "../input/Input";
import {useDispatch, useSelector} from "react-redux";
import {paginationSelector} from "../../store/pagination/selectors";
import {setPaginationLimit} from "../../store/pagination/operations";
import {DropDown} from "../drop-down/DropDown";

const showOnPageConfig = [5, 10, 15, 20, 30, 50].map(el => ({value: el, name: `${el}`}))

export const Pagination = ({
                               currentPage,
                               totalCount,
                               wrapperClassName,
                               pageClassName,
                               activePageClassName,
                               maxDisplayPages,
                               onPageChange,
                           }) => {
    const {limit} = useSelector(paginationSelector)
    const [pagesCount, setPagesCount] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        setPagesCount(Math.ceil(totalCount / limit) || 1)
    }, [totalCount, limit])

    const limitChangeHandler = (newLimit) => {
        if (newLimit?.value) {
            dispatch(setPaginationLimit(newLimit?.value))
        } else {
            dispatch(setPaginationLimit(10))
        }
    }

    const pageDisplaySelector = useCallback(() => {
        let _pagesArray = Array.from(Array(pagesCount).keys())

        if (pagesCount <= maxDisplayPages) return _pagesArray

        const _halfOfMaxDisplayedPages = Math.ceil(maxDisplayPages / 2)

        if (currentPage - _halfOfMaxDisplayedPages < 0) return _pagesArray.slice(0, maxDisplayPages)

        if (currentPage + _halfOfMaxDisplayedPages >= pagesCount) return _pagesArray.slice(pagesCount - maxDisplayPages, pagesCount)

        return _pagesArray.slice(currentPage - _halfOfMaxDisplayedPages, currentPage + _halfOfMaxDisplayedPages)
    }, [pagesCount, currentPage])

    const pageClickHandler = useCallback((pageNumber) => {
        onPageChange && onPageChange(pageNumber)
    }, [onPageChange])

    const arrowClickHandler = useCallback((direction) => {
        if (direction === 'forward') {
            onPageChange && onPageChange(currentPage + 1 >= (pagesCount - 1) ? (pagesCount - 1) : currentPage + 1)
        } else if (direction === 'back') {
            onPageChange && onPageChange(currentPage - 1 <= 0 ? 0 : currentPage - 1)
        }
    }, [currentPage, pagesCount, onPageChange])

    return (
        <div className={`${styles.wrapper} ${wrapperClassName}`}>
            <div className={styles.wrapper__count}>
                <p>Show</p>
                <DropDown wrapperClassName={styles.wrapper__count__input} onChange={limitChangeHandler}
                          options={showOnPageConfig} value={{name: `${limit}`, value: limit}}/>
                <p>on page</p>
            </div>
            <img onClick={arrowClickHandler.bind(null, 'back')} src={arrow} alt={'left-arrow'}/>
            {pageDisplaySelector().map((e) => {
                return (
                    <span onClick={pageClickHandler.bind(null, e)} key={e}
                          className={`${styles.wrapper__page} ${pageClassName} ${+currentPage === +e ? `${styles.active} ${activePageClassName}` : ''}`}>
                        {e + 1}
                    </span>
                )
            })}
            <img onClick={arrowClickHandler.bind(null, 'forward')} src={arrow} alt={'right-arrow'}/>
        </div>
    )
}

Pagination.defaultProps = {
    wrapperClassName: '',
    pageClassName: '',
    activePageClassName: '',
    onPageChange: null,
    currentPage: 0,
    pagesCount: 0,
    maxDisplayPages: 10,
}
