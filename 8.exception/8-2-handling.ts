{
  class TimeoutError extends Error {

  }
  class OfflineError extends Error {
  
  }
  
  class NetworkClient {
    tryConnect(): void {
      throw new Error('no network');
    }
  }
  
  class UserService {
    constructor(private client: NetworkClient) {}
  
    login() {
      this.client.tryConnect();
    }
  }
  
  // error는 여기서 처리하는게 좋음
  // 의미있는 처리를 할 수 있는 곳에서 에러처리를 하는게 좋음
  // catch로 받아오는 error에는 타입정보가 전달되지 않아 instanceof를 사용할 수 없음!
  // 타입정보가 필요할땐 error state를 사용하는게 좋음(8-3으로!)
  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        // show dialog!
      }
    }
  }
  
  const client = new NetworkClient();
  const service = new UserService(client);
  
  const app = new App(service);
  app.run();
}