import moment from 'moment'

export const formatDate = (strUpdatedDate) => {
    return new Date(strUpdatedDate).toLocaleString(); //(or .toString()
}

export const searchRepo = (searchedTerm) => {
    
}