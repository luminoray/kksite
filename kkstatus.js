(function () {
    var options = {
        channel: "KKCYBER", // TODO: Change this to the streams username you want to embed
        width: 1,
        height: 1,
        parent: ["luminoray.github.io"]
    };
    var player = new Twitch.Player("twitch", options);
    
    player.addEventListener(Twitch.Player.ONLINE, kkAwake);
    player.addEventListener(Twitch.Player.OFFLINE, kkAsleep);
    
    function kkAwake() {
        removeTriggers();
        document.getElementById("kkStatus").classList.add("awake");
    }
    
    function kkAsleep() {
        removeTriggers();
        document.getElementById("kkStatus").classList.add("asleep");
    }
    
    function removeTriggers() {
        player.setMuted(true);
        player.removeEventListener(Twitch.Player.ONLINE, kkAwake);
        player.removeEventListener(Twitch.Player.OFFLINE, kkAsleep);
        document.getElementById("twitch").remove();
        player = undefined;
    }
})();