export class UserActivity {
    constructor(userActivity) {
        this.id = userActivity.userId
        this.sessions = userActivity.sessions
    }
}