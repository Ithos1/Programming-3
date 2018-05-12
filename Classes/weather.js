var Weather = {
    Temperature:20,
    Season:"summer",
    Psb_S:["summer","fall","winter","spring"],
    Wth:"clear",
    Psb_W:["clear","clear","clear","clear","rainy","rainy","storming"],
    Psb_W_winter:["clear","clear","clear","clear","snow","snow","snowstorm"],
    ToD:"Day",     //Time of Day
    Tick:1, //Day_Night
    Tick2:1, //Season
    Tick3:1, //Weather
    Tick4:0, //Weather effect
    Def:false,
    Dry_Season:false,
    Wildfire:false,
    Absolute_zero:false,
    Temperature_Change:function(){
        switch(this.Season){
            case this.Psb_S[0]:
                if(this.Temperature<25 && this.Def == false){
                    this.Temperature+=0.5;
                }
                else{
                    this.Def=true;
                    switch(ToD){
                        case "Day":
                            this.Temperature+= Math.round(Math.random()*10)*0.4;
                            break;
                        case "Night":
                            this.Temperature+= Math.round(Math.random()*10)*0.3-0.2;
                    }
                }
                break;
            case this.Psb_S[1]:
                if((this.Temperature<14 || this.Temperature>16) && this.Def==false){
                    if(this.Temperature>16){ this.Temperature -=0.5;}
                    else{this.Temperature+=0.5;}
                }
                else{
                    this.Def=true;
                    switch(ToD){
                        case "Day":
                            this.Temperature+= Math.round(Math.random()*10)*0.6-0.3;
                            break;
                        case "Night":
                            this.Temperature+= Math.round(Math.random()*10)*0.2-0.1;
                    }
                }
                break;
            case this.Psb_S[2]:
                switch(ToD){
                    case "Day":
                        this.Temperature+= Math.round(Math.random()*10)*0.6-0.3;
                        break;
                    case "Night":
                        this.Temperature+= Math.round(Math.random()*10)*0.2-0.1;
                }
                break;
            case this.Psb_S[3]:
                if((this.Temperature<14 || this.Temperature>16) && this.Def==false){
                    if(this.Temperature>16){ this.Temperature -=0.5;}
                    else{this.Temperature+=0.5;}
                }
                else{
                    this.Def=true;
                    switch(ToD){
                        case "Day":
                            this.Temperature+= Math.round(Math.random()*10)*0.3-0.2;
                            break;
                        case "Night":
                            this.Temperature+= Math.round(Math.random()*10)*0.3-0.3;
                    }
                }
                
        }
    },
    Weather_Change:function(){
        if(this.Season == this.Psb_S[2]){
            if(this.Tick3++ == 10){
                this.Wth = this.Psb_W_winter[Math.round(Math.random()*7)];
                this.Tick3=0;
            }
        }
        else if(this.Season == this.Psb_S[1]){
                this.Wth = this.Psb_W[Math.round(Math.random()*7)];
                this.Tick3=0;
        }
        else{
            this.Wth = this.Psb_W[Math.round(Math.random()*6)];
            this.Tick3=0;
        }
    },
    Day_Night:function(){
        switch(this.Season){
            case this.Psb_S[0]:
                switch(this.Tick){
                    case 1:
                        this.ToD = "day";
                        this.Tick++;
                        break;
                    case 2:
                        this.ToD = "day";
                        this.Tick++;
                        break;
                    case 3:
                        this.ToD = "day";
                        this.Tick++;
                        break;
                    case 4:
                        this.ToD = "night";
                        this.Tick=1;
                        break;
                }
                break;
            case this.Psb_S[1]:
                switch(this.Tick){
                    case 1:
                        this.ToD = "day";
                        this.Tick++;
                        break;
                    case 2:
                        this.ToD = "day";
                        this.Tick++;
                        break;
                    case 3:
                        this.ToD = "night";
                        this.Tick++;
                        break;
                    case 4:
                        this.ToD = "night";
                        this.Tick=1;
                        break;
                }
                break;
            case this.Psb_S[2]:
                switch(this.Tick){
                    case 1:
                        this.ToD = "day";
                        this.Tick++;
                        break;
                    case 2:
                        this.ToD = "night";
                        this.Tick++;
                        break;
                    case 3:
                        this.ToD = "night";
                        this.Tick++;
                        break;
                    case 4:
                        this.ToD = "night";
                        this.Tick=1;
                        break;
                }
                break;
            case this.Psb_S[3]:
                switch(this.Tick){
                    case 1:
                        this.ToD = "day";
                        this.Tick++;
                        break;
                    case 2:
                        this.ToD = "night";
                        this.Tick++;
                        break;
                    case 3:
                        this.ToD = "night";
                        this.Tick++;
                        break;
                    case 4:
                        this.ToD = "night";
                        this.Tick=1;
                        break;
                }
        }
    },
    Season_Change:function(){
        switch(this.Tick2++){
            case 0:
                this.Season="summer";
                this.Def = false;
                break;
            case 75:
                this.Season="fall";
                this.Def = false;
                break;
            case 200:
                this.Season="winter";
                this.Def = false;
                break;
            case 275:
                this.Season="spring";
                this.Def = false;
                break;
            case 400:
                this.Season="summer";
                this.Def = false;
                this.Tick2=0;
        }
    },
    Weather_effect:function(){
        if(this.Wth=="rainy" && Tick4++==2){
            if(this.Temperature > 15){this.Temperature-=0.5;}
            else{this.Temperature +=0.5;}
        }
        if(this.Wth=="storming" && Tick4++==2){
            if(this.Temperature > 15){this.Temperature-=0.75;}
            else{this.Temperature +=0.75;}
            if(Math.round(Math.random()*100)==13){
                
            }
        }
    }
};