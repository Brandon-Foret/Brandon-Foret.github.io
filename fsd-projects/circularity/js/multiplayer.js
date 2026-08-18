/**
 * Local Two-Player Multiplayer Module for Circularity Game
 * Handles local multiplayer with Player 1 (WASD) and Player 2 (Arrow Keys)
 */

var Multiplayer = (function() {
    'use strict';
    
    // Private variables
    var player2Data = null;
    var connectionCallbacks = {};
    
    // Public API
    var api = {
        isMultiplayer: false,
        isHost: false, // Not used in local multiplayer but kept for compatibility
        remotePlayerData: null, // This will be player 2 data
        
        // Initialize multiplayer system
        init: function(callbacks) {
            connectionCallbacks = callbacks || {};
            // No URL checking needed for local multiplayer
        },
        
        // Start local multiplayer game
        startLocalMultiplayer: function() {
            api.isMultiplayer = true;
            api.isHost = true; // Player 1 is considered "host"
            
            // Initialize player 2 data
            player2Data = {
                x: 250,
                y: 250,
                radius: 15,
                score: 0
            };
            
            api.remotePlayerData = player2Data;
            
            // Trigger connection callback
            if (connectionCallbacks.onConnected) {
                connectionCallbacks.onConnected();
            }
        },
        
        // Update player 2 data (called from gamification system)
        updatePlayer2: function(data) {
            if (player2Data && data) {
                player2Data.x = data.x;
                player2Data.y = data.y;
                player2Data.radius = data.radius;
                player2Data.score = data.score;
                api.remotePlayerData = player2Data;
                
                // Trigger update callback
                if (connectionCallbacks.onRemotePlayerUpdate) {
                    connectionCallbacks.onRemotePlayerUpdate(player2Data);
                }
            }
        },
        
        // Send game data (not needed for local multiplayer but kept for compatibility)
        sendGameData: function(data) {
            // No-op for local multiplayer
        },
        
        // Get connection status
        isConnected: function() {
            return api.isMultiplayer;
        },
        
        // Disconnect from multiplayer
        disconnect: function() {
            api.isMultiplayer = false;
            api.remotePlayerData = null;
            player2Data = null;
            
            if (connectionCallbacks.onDisconnected) {
                connectionCallbacks.onDisconnected();
            }
        }
    };
    
    // No private functions needed for local multiplayer
    // All functionality is handled directly in the public API
    
    return api;
})();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Multiplayer;
}
