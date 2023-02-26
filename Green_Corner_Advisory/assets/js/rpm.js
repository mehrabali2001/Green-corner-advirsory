var numericalValues = new Array();  
            numericalValues["18 to 25"]= 5;
            numericalValues["26 to 35"]= 4;
            numericalValues["36 to 45"]= 3;
            numericalValues["Above 46"]= 2;
            numericalValues["Multiple"]= 2;
            numericalValues["Single"]= 3;
            numericalValues["Self"]= 4;
            numericalValues["Retried"]= 5;
            numericalValues["0 to 2"]= 2;
            numericalValues["3 to 4"]= 3;
            numericalValues["4 to 6"]= 4;
            numericalValues["More than 6"]= 5;
			      numericalValues["gt10"]= 2;
            numericalValues["6-10"]= 3;
            numericalValues["2-6"]= 4;
            numericalValues["lt2"]= 5;
            numericalValues["15%"]= 2;
            numericalValues["25%"]= 3;
            numericalValues["40%"]= 4;
            numericalValues["gt40%"]= 5;
			      numericalValues["fd"]= 5;
            numericalValues["mf"]= 4;
            numericalValues["sm"]= 3;
            numericalValues["all"]= 2;
			numericalValues["separate"]= 2;
            numericalValues["most"]= 3;
            numericalValues["some"]= 4;
            numericalValues["no"]= 5;
			numericalValues["lt1"]= 2;
            numericalValues["lt3"]= 3;
            numericalValues["lt5"]= 4;
            numericalValues["gt5"]= 5;
			numericalValues["gt5y"]= 2;
            numericalValues["bw25"]= 3;
            numericalValues["bw12"]= 4;
            numericalValues["lt1"]= 5;
			numericalValues["more"]= 5;
            numericalValues["Wait"]= 4;
            numericalValues["Exit"]= 3;
            numericalValues["Exit and wait"]= 2;
			numericalValues["accept high risk"]= 5;
            numericalValues["accept moderate risk"]= 4;
            numericalValues["accept less risk"]= 3;
            numericalValues["accept minimum loss"]= 2;
            
            function getScoreAge()
            {
            var scoreAge = 0;
            var form = document.forms["form"];
            var age = form.elements["age"];
            for(var i=0; i<age.length; i++)
            {
                if(age[i].checked)
                {
                scoreAge = numericalValues[age[i].value];
                break;
                }
            }
            return scoreAge;
            };
            
            function getScoreIncome()
            {
            var scoreIncome = 0;
            var form = document.forms["form"];
            var income = form.elements["income"];
            
            for(var i=0; i<income.length; i++)
            {
              if(income[i].checked)
              {
                scoreIncome = numericalValues[income[i].value];
              break;
              }
            
            }
            return scoreIncome;
            };

            function getScoreDependent()
            {
            var scoreDependent = 0;
            var form = document.forms["form"];
            var dependent = form.elements["dependent"];
            
            for(var i=0; i<dependent.length; i++)
            {
              if(dependent[i].checked)
              {
                scoreDependent = numericalValues[dependent[i].value];
              break;
              }
            
            }
            return scoreDependent;
            };

            function getScoreRange()
            {
            var scoreRange = 0;
            var form = document.forms["form"];
            var range = form.elements["range"];
            
            for(var i=0; i<range.length; i++)
            {
              if(range[i].checked)
              {
                scoreRange = numericalValues[range[i].value];
              break;
              }
            
            }
            return scoreRange;
            };

            function getScoreAsset()
            {
            var scoreAsset = 0;
            var form = document.forms["form"];
            var asset = form.elements["asset"];
            
            for(var i=0; i<asset.length; i++)
            {
              if(asset[i].checked)
              {
                scoreAsset = numericalValues[asset[i].value];
              break;
              }
            
            }
            return scoreAsset;
            };

            function getScoreLiability()
            {
            var scoreLiability = 0;
            var form = document.forms["form"];
            var liability = form.elements["liability"];
            
            for(var i=0; i<liability.length; i++)
            {
              if(liability[i].checked)
              {
                scoreLiability = numericalValues[liability[i].value];
              break;
              }
            
            }
            return scoreLiability;
            };

            function getScoreCapital()
            {
            var scoreCapital = 0;
            var form = document.forms["form"];
            var capital = form.elements["capital"];
            
            for(var i=0; i<capital.length; i++)
            {
              if(capital[i].checked)
              {
                scoreCapital = numericalValues[capital[i].value];
              break;
              }
            
            }
            return scoreCapital;
            };

            function getScoreEMI()
            {
            var scoreEMI = 0;
            var form = document.forms["form"];
            var EMI = form.elements["EMI"];
            
            for(var i=0; i<EMI.length; i++)
            {
              if(EMI[i].checked)
              {
                scoreEMI = numericalValues[EMI[i].value];
              break;
              }
            
            }
            return scoreEMI;
            };

            function getScoreExperienced()
            {
            var scoreExperienced = 0;
            var form = document.forms["form"];
            var experienced = form.elements["experienced"];
            
            for(var i=0; i<experienced.length; i++)
            {
              if(experienced[i].checked)
              {
                scoreExperienced = numericalValues[experienced[i].value];
              break;
              }
            
            }
            return scoreExperienced;
            };

            function getScorePlanned()
            {
            var scorePlanned = 0;
            var form = document.forms["form"];
            var planned = form.elements["planned"];
            
            for(var i=0; i<planned.length; i++)
            {
              if(planned[i].checked)
              {
                scorePlanned = numericalValues[planned[i].value];
              break;
              }
            
            }
            return scorePlanned;
            };

            function getScoreHorizon()
            {
            var scoreHorizon = 0;
            var form = document.forms["form"];
            var horizon = form.elements["horizon"];
            
            for(var i=0; i<horizon.length; i++)
            {
              if(horizon[i].checked)
              {
              scoreHorizon = numericalValues[horizon[i].value];
              break;
              }
            
            }
            return scoreHorizon;
            };

            function getScoreEinvestment()
            {
            var scoreEinvestment = 0;
            var form = document.forms["form"];
            var einvestment = form.elements["einvestment"];
            
            for(var i=0; i<einvestment.length; i++)
            {
              if(einvestment[i].checked)
              {
              scoreEinvestment = numericalValues[einvestment[i].value];
              break;
              }
            
            }
            return scoreEinvestment;
            };

            function getScoreLoss()
            {
            var scoreLoss = 0;
            var form = document.forms["form"];
            var loss = form.elements["loss"];
            
            for(var i=0; i<loss.length; i++)
            {
              if(loss[i].checked)
              {
              scoreLoss = numericalValues[loss[i].value];
              break;
              }
            
            }
            return scoreLoss;
            };

            function getScoreDescribes()
            {
            var scoreDescribes = 0;
            var form = document.forms["form"];
            var describes = form.elements["describes"];
            
            for(var i=0; i<describes.length; i++)
            {
              if(describes[i].checked)
              {
              scoreDescribes = numericalValues[describes[i].value];
              break;
              }
            
            }
            return scoreDescribes;
            };

            function getTotal()
            {
            var totalScore = getScoreAge() + getScoreIncome() + getScoreRange() + getScoreAsset() + getScoreLiability() + getScoreCapital() + getScoreDependent() + getScoreEMI() + getScoreExperienced() + getScorePlanned() + getScoreHorizon() + getScoreEinvestment() + getScoreLoss() + getScoreDescribes();
            document.getElementById('result').innerHTML = "YOUR SCORE IS : "+totalScore;
            }
            
            document.getElementById('calculate').onclick=getTotal;