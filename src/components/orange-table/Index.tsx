/* eslint-disable no-unused-vars */
import React, { ReactElement, useState, PropsWithChildren } from 'react'
import './Index.scss'
import IconSortNone2x from './icons/icon_sort_none@2x.png'
import IconSortNone3x from './icons/icon_sort_none@3x.png'
import IconSortAsc2x from './icons/icon_sort_asc@2x.png'
import IconSortAsc3x from './icons/icon_sort_asc@3x.png'
import IconSortDesc2x from './icons/icon_sort_desc@2x.png'
import IconSortDesc3x from './icons/icon_sort_desc@3x.png'
declare type SortType = 'asc' | 'desc' | undefined
declare interface ColumnProps {
    name: string
    sort?: boolean
    sortType?: SortType
}
interface Props {
    height?: number
}

export default function Index (props: PropsWithChildren<Props>): ReactElement {

    const ICON_SORT_NONE = window.devicePixelRatio >= 3 ? IconSortNone3x : IconSortNone2x
    const ICON_SORT_ASC = window.devicePixelRatio >=3 ? IconSortAsc3x : IconSortAsc2x
    const ICON_SORT_DESC = window.devicePixelRatio >=3 ? IconSortDesc3x : IconSortDesc2x

    const defaultColumns: Array<ColumnProps> = [
        { name: '综合' },
        { name: '额度', sort: true, sortType: undefined },
        { name: '期限', sort: true, sortType: undefined },
        { name: '利率', sort: true, sortType: undefined }
    ]
    const [columns, setColumns] = useState<Array<ColumnProps>>(defaultColumns)

    const clickColumnSort = (val: ColumnProps, index: number) => {
        if (val.sort) {
            let oldSortType: SortType = val.sortType
            let newColumns = columns.map((v, k) => {
                if (index === k) {
                    /// asc desc undefined
                    if (oldSortType === undefined) {
                        v.sortType = 'asc'
                    } else if (oldSortType === 'asc') {
                        v.sortType = 'desc'
                    } else {
                        v.sortType = undefined
                    }
                } else {
                    if (v.sort) {
                        v.sortType = undefined
                    }
                }
                return v
            })
            setColumns(newColumns)
        }
    }

    return (
        <div className="orange-table">
            {/* header */}
            <div className="table-header">
                {
                    columns.map((val, index) => (
                        <div key={index} className="table-column">
                            <div className="table-column-box" onClick={() => clickColumnSort(val, index)}>
                                <span className="text">{val.name}</span>
                                {
                                    val.sort ? (
                                        val.sortType === undefined ? <img className="sort" src={ICON_SORT_NONE} alt=""/> :
                                            val.sortType === 'asc' ? <img className="sort" src={ICON_SORT_ASC} alt=""/> :
                                                val.sortType === 'desc' ? <img className="sort" src={ICON_SORT_DESC} alt=""/> : ''
                                    ) : ''
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* body */}
            {props.children}
        </div>
    )
}
