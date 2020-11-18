/* eslint-disable no-unused-vars */
export default {}

// import React, { ReactElement, useState, useCallback } from 'react'
// import './Index.scss'
// import { useLaunchListQuery, useLaunchProfileQuery } from '../../generated/graphql'
// interface Props {}
// export default function Index(props: Props): ReactElement {
//     const className = 'LaunchProfile'
//     const [id, setId] = useState(42)
//     const { data, error, loading } = useLaunchListQuery()
//     const resultQuery = useLaunchProfileQuery({ variables: { id: String(id) } })
//     const resultQueryData = resultQuery.data
//     const resultQueryError = resultQuery.error
//     const resultQueryLoading = resultQuery.loading
//     const handleIdChange = useCallback(
//         (newId: number | null | undefined) => {
//             if (newId) {
//                 setId(newId)
//             }
//         },
//         [],
//     )
//     return (
//         <div className="app-graphql">
//             <div className="title">GraphQL Test of SpaceX Launches</div>
//             <div className="test">
//                 <span>请参考：</span><a href="https://spacex-graphql.netlify.app" target="_block">SpaceX Launches</a>
//             </div>
//             <div className="body">
//                 <div className="body-left">
//                     {
//                         loading ? (
//                             <div className="loading">Loading</div>
//                         ) : error ? (
//                             <div className="error">Error</div>
//                         ) : data ? (
//                             <ol className="ol-list">
//                                 {
//                                     !!data.launches && data.launches.map((launch, index) => (
//                                         <li key={index} onClick={() => handleIdChange(launch?.flight_number)}>{launch?.mission_name} ({launch?.launch_year})</li>
//                                     ))
//                                 }
//                             </ol>
//                         ) : ''
//                     }
//                 </div>
//                 <div className="body-right">
//                     {
//                         resultQueryLoading ? (
//                             <div className="loading">Loading</div>
//                         ) : resultQueryError ? (
//                             <div className="error">Error</div>
//                         ) : resultQueryData ? (
//                             <div className={className}>
//                                 <div className={`${className}__status`}>
//                                     <span>Flight {resultQueryData.launch?.flight_number}: </span>
//                                     {resultQueryData.launch?.launch_success ? (
//                                         <span className={`${className}__success`}>Success</span>
//                                     ) : (
//                                         <span className={`${className}__failed`}>Failed</span>
//                                     )}
//                                 </div>
//                                 <h1 className={`${className}__title`}>
//                                     {resultQueryData.launch?.mission_name}
//                                     {resultQueryData.launch?.rocket &&
//                                     ` (${resultQueryData.launch.rocket.rocket_name} | ${resultQueryData.launch.rocket.rocket_type})`}
//                                 </h1>
//                                 <p className={`${className}__description`}>{resultQueryData.launch?.details}</p>
//                                 {!!resultQueryData.launch?.links && !!resultQueryData.launch.links.flickr_images && (
//                                     <div className={`${className}__image-list`}>
//                                         {
//                                             resultQueryData.launch.links.flickr_images.map(image =>
//                                                 image ? <img src={image} className={`${className}__image`} key={image} alt={''}/> : null,
//                                             )
//                                         }
//                                     </div>
//                                 )}
//                             </div>
//                         ) : ''
//                     }
//                 </div>
//             </div>
            
//         </div>
//     )
// }
