export interface Player {
    user_id: string,
    player_first_name: string,//苗字と名前は分けて返してほしい
    player_last_name: string,
    birth_date: string, 
    generation: string,
    age: number,
    now_team_name: string,
    past_team_names: string,
    selection_history: string,
    positions: string[], //ポジションはマスタで管理するためサーバー側でJOINした値を返すようにする
    height: number,
    weight: number,
    dominant_foot_id: number,
    self_pr: string,
    coach_contact: string,
    fifty_meter_time?: number,
    father_height?: number,
    mother_height?: number,
    parents_sports_history: string,
    profile_picture_url: string,
    play_video_url: string
  }