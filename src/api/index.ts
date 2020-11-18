import { POST } from './axios'
/**
 * 产品列表
 * @param type 0首页 1推荐 3产品分类 4借贷宝放贷排行榜 5借贷宝今日推荐  6借贷宝贷款大全 7借贷宝城市热门推荐
 * @param classifyId 分类ID
 * @param sortType 当类型为6时，必填，1综合排序 2贷款额度 3贷款速度 4贷款利率"
 * @param pageIndex 页码 默认1
 * @param pageSize 每页数量 默认10
 */
export function productList(type: number, classifyId?: number, sortType?: number, pageIndex: number = 1, pageSize: number = 10) {
    return POST('/product/list', {
        type,
        classifyId,
        sortType,
        pageIndex,
        pageSize
    })
}
