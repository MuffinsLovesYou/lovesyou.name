


function Minions(){
	this.Count = 0;
	this.DisplayColumns = ['Name','Type','HP','AC','Attack','Damage','Items'];
	this.Add=(minion)=>{
		this[minion.Name] = minion;
		this.Count++;
	}
	
	// Utility function spoofing array.prototype.filter
	this.Filter=(func)=>{
		let returnVal = [];
		for(i in this){
			let item = this[i];
			if(func(item)){returnVal.push(item);}
		}
		return returnVal;
	}
	
	// Parameters: An Items() collection
	// Function: Distributes items to minions in this collection. 
	this.Equip=(items)=>{
		// split items into types. 
		let minions = [];
		let armor = [];
		let melee = [];
		let shield = [];
		let ranged = [];
		
		for(i in this){ minions.push(this[i]);}
		for(i in items){// separate items by type, this gives us more freedom to sort or otherwise take care with distribution
			let item = items[i];
			let arr = [];
			switch(item.Type){
				case 'Weapon': arr = item.Properties.Range?ranged:melee; break;
				case 'Armor': arr = armor; break;
				case 'Shied': arr = shield; break;
				default: continue; 
			}
			for(let j = item.Count; j>0;j--){arr.push(item);}
		}
		
		//***** Armor assigning *****//
		// Sort with least agile minions on top 
		minions.sort((a,b)=>{ return a.AC > b.AC;});
		// Sort with weakest armor on top, heaviest at bottom.
		armor.sort((a,b)=>{ return a.AC > b.AC });
		let armorToGive = this.Filter((x)=>{return x.EquipArmor == true;}).length;
		let armorLeft = armor.length;
		
		while(armorToGive > 0 && armorLeft > 0){ // while we have armor to give and unarmored minions.
		for(a in armor){
			let arm = armor[a];
			if(!arm.Name){continue;}
			
			for(m in minions){
				let minion = minions[m]; 
				if(!minion.Name){continue;}
				
				let bonus = GetArmorBonus(arm, minion);
				if(bonus > minion.AC){ 
					if(!minion.Armor){armorToGive--;armorLeft--;}
					armor[a] = minion.Armor||'';// if we were wearing weaker armor, return it 
					minion.Armor = arm; // then equip 
					minion.AC=bonus;
					break;// move to next item. 
				}
			}
		}}// end of while and for armor loop
		
		
		//***** Ranged weapon assigning *****//
		ranged.sort((a,b)=>{ return a.MaxDamage > b.MaxDamage; });// quantify 'damage' so that it sorts
		// to give out: one per minion with equipranged = true;
		let rangedToGive = this.Filter((x)=>{return x.EquipRanged == true; }).length; 
		let rangedLeft = ranged.length;
		
		while(rangedToGive > 0 && rangedLeft > 0){
		for(r in ranged){
			let ran = ranged[r];
			if(!ran.Name){continue;}
			for(m in minions){
				let minion = minions[m];
				if(!minion.EquipRanged){continue;}
				
				let minionRanged = (minion.Ranged||{MaxDamage:0});
				if(ran.MaxDamage > minionRanged.MaxDamage){
					if(!minion.Ranged){rangedToGive--;rangedLeft--;}
					ranged[r] = minion.Ranged||'';
					minion.Ranged = ran;
					minion.RangedDamage = ran.Damage+'+'+minion.Dex.Bonus();
					break;
				}
				
			}
		}} // end of ranged while/for loop
		
		//***** Melee weapon assigning *****//
		minions.sort((a,b)=>{ return a.Ranged < b.Ranged; });
		melee.sort((a,b)=>{ return a.MaxDamage > b.MaxDamage; });
		let meleeToGive = this.Filter((x)=>{ return x.EquipMelee == true; }).length;
		let meleeLeft = melee.length;
		
		while(meleeToGive > 0 && meleeLeft > 0){
		for(i in melee){
			let mel = melee[i];
			if(!mel.Name){continue;}
			for(m in minions){
				let minion = minions[m];
				if(!minion.EquipMelee){continue;}
				
				let minionMelee = (minion.Melee||{MaxDamage:0});
				if(mel.MaxDamage > minionMelee.MaxDamage){
					if(!minion.Melee){meleeToGive--;meleeLeft--;}
					melee[m] = minion.Melee||'';
					minion.Melee = mel;
					minion.MeleeDamage = mel.Damage+'+'+minion.Str.Bonus();
					break;
				}
			}
		}}
		
	}
}
function GetArmorBonus(armor, minion){
	let ac = armor.AC;
	let dex = minion.Dex.Bonus();
	if(armor.Class == 'Light') { ac+=dex; }
	else if(armor.Class == 'Medium'){ ac+=(dex>2)?2:dex; }
	return ac;
}


// 'base' class for default monster values.
function Minion(){
	this.EquipRanged = true;
	this.EquipArmor = true;
	this.EquipShield = true;
	this.EquipMelee = true;
	
	// Cumbersome property definitions..
	Object.defineProperties(this, {
		'Damage' : { 'get' : function(){
			let damage = 'Melee: ' + (this.Melee)?this.Melee.Damage+'+'+this.Str.Bonus() : this.MeleeDamage+'+'+this.Str.Bonus();
			if(this.Ranged) {damage += '<br>Ranged: ' + this.Ranged.Damage+'+'+this.Dex.Bonus();}
			//let damage = (this.Melee)?'Melee: ' + this.MeleeDamage : 'Ranged: ' + this.RangedDamage;
			return damage;
		}},
		'Attack' : { 'get' : function(){
			let attack = 'Melee:' + (this.Proficiency + this.Str.Bonus());
			if(this.Ranged) attack += '<br>Ranged:' + (this.Proficiency + this.Dex.Bonus());
			return attack;
		}},
		'Items' : { 'get' : function(){
			let items = [];
			if(this.Melee){items.push(this.Melee.Name);}
			if(this.Ranged){items.push(this.Ranged.Name);}
			if(this.Armor){items.push(this.Armor.Name);}
			if(this.Shield){items.push(this.Shield.Name);}
			return items.join('<br>');
		}}
	});
}


function Skeleton(name){
	Minion.call(this);
	
	this.Name = name;
	this.Type = 'Skeleton';
	this.HP = 13;
	this.AC = 12;
	this.Dex = 14;
	this.Str = 10;
	this.Proficiency = 2;
	this.MeleeDamage = '1d4';// improvised weapon. 
}

		
function Zombie(name) {
	Minion.call(this);
	this.EquipRanged = false;
	
	this.Name = name;
	this.Type = 'Zombie';
	this.HP = 22;
	this.AC = 8;
	this.Dex = 6;
	this.Str = 13;
	this.Proficiency = 2;
	this.MeleeDamage = '1d6+'+this.Str.Bonus();
}


function AddItem(minion,item,count){
	if(item.Count>0){
		item.Count-=(count)?Math.min(item.Count,count):1;
		minion.Items.push(item.Name+((count)?'*'+count:''));
		switch(item.Name){
			case 'Heavy Crossbow':minion.Damage='1d10+'+minion.Dex.Bonus();break;
			case 'Light Crossbow':minion.Damage='1d8+'+minion.Dex.Bonus();break;
			case 'Hide Armor':minion.AC+=2;break;
			case 'Chain Mail':minion.AC+=8;break;
		}
		return true;
	}
}