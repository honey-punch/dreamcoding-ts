{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://..',
      data: 'byte-date..',
    }
  }

  // omit타입!
  // 기존의 타입에서 원하는 속성과 밸류를 뺄 수 있음
  // function getVideoMetadata(id: string): Omit<Video, 'id' | 'title'> {
  //   return {
  //     id: id,
  //     title: 'title',
  //   }
  // }

  // 위처럼 함수에서 사용하기 보다는 재사용성을 위해 타입을 따로 만드는게 좋음
  type VideoMetadata = Omit<Video, 'url' | 'data'>;
  
  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
      title: 'title',
    }
  }
}