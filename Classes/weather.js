var Weather = {
    Temperature:20,
    Season:"summer",
    Psb_S:["summer","fall","winter","spring"],
    Wth:"clear",
    Psb_W:["clear","clear","clear","clear","rainy","rainy","storming"],
    Psb_W_winter:["clear","clear","clear","clear","snow","snow","snowstorm"],
    ToD:"Day",     //Time of Day
    Tick:1,
    Dry_Season:false,
    Wildfire:false,
    Absolute_zero:false,
    Temperature_Change:function(){
        switch(Season){
            case Psb_S[0]:
                break;
            case Psb_S[1]:
                break;
            case Psb_S[2]:
                break;
            case Psb_S[3]:
                
        };
    },
    Weather_Change:function(){
        if(Season == Psb_S[2]){
            
        }
        else{

        }
    },
    Day_Night:function(){
        switch(Season){
            case Psb_S[0]:
                switch(Tick){
                    case 1:
                        this.ToD = "day";
                        Tick++;
                        break;
                    case 2:
                        this.ToD = "day";
                        Tick++;
                        break;
                    case 3:
                        this.ToD = "day";
                        Tick++;
                        break;
                    case 4:
                        this.ToD = "night";
                        Tick=1;
                        break;
                }
                break;
            case Psb_S[1]:
                switch(Tick){
                    case 1:
                        this.ToD = "day";
                        Tick++;
                        break;
                    case 2:
                        this.ToD = "day";
                        Tick++;
                        break;
                    case 3:
                        this.ToD = "night";
                        Tick++;
                        break;
                    case 4:
                        this.ToD = "night";
                        Tick=1;
                        break;
                }
                break;
            case Psb_S[2]:
                switch(Tick){
                    case 1:
                        this.ToD = "day";
                        Tick++;
                        break;
                    case 2:
                        this.ToD = "night";
                        Tick++;
                        break;
                    case 3:
                        this.ToD = "night";
                        Tick++;
                        break;
                    case 4:
                        this.ToD = "night";
                        Tick=1;
                        break;
                }
                break;
            case Psb_S[3]:
                switch(Tick){
                    case 1:
                        this.ToD = "day";
                        Tick++;
                        break;
                    case 2:
                        this.ToD = "night";
                        Tick++;
                        break;
                    case 3:
                        this.ToD = "night";
                        Tick++;
                        break;
                    case 4:
                        this.ToD = "night";
                        Tick=1
                        break;
                }
        };
    }
};