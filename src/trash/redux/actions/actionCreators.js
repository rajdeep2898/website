export function openSemList (index) {
  return{
    type: 'OPEN_SEMESTER_LIST',
    index
  }
}

export function openCourse (index) {
  return{
    type: 'OPEN_COURSE',
    index
  }
}

export function openBooks (index) {
  return{
    type: 'OPEN_BOOKS',
    index
  }
}

export function openNotes (index) {
  return{
    type: 'OPEN_NOTES',
    index
  }
}

export function openPres (index) {
  return{
    type: 'OPEN_PRESENTATION',
    index
  }
}

export function openVideos (index) {
  return{
    type: 'OPEN_TOPIC_VIDEOS',
    index
  }
}
