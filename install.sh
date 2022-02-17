#!/usr/bin/bash
#!/usr/bin/bash
NOCOLOR='\033[0m'
RED='\033[0;31m'
GREEN='\033[0;32m'
ORANGE='\033[0;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
LIGHTGRAY='\033[0;37m'
DARKGRAY='\033[1;30m'
PURPLE='\033[1;31m'
LIGHTGREEN='\033[1;32m'
YELLOW='\033[1;33m'
LIGHTRED='\033[1;34m'
LIGHTPURPLE='\033[1;35m'
LIGHTCYAN='\033[1;36m'
WHITE='\033[1;37m'

 echo -e " ${cyan}Iniciando..."
sleep 4
clear

if [ -e "$HOME/../usr/bin/ruby" ]; then
	echo -e " ${cyan}ruby detectado prosseguindo..."
	sleep 1
	if [ -e "/data/data/com.termux/files/usr/bin/lolcat" ]; then
		echo -e " ${cyan}lolcat detectado prosseguindo..."
		sleep 1
	else
		echo -e " ${RED} lolcat não detectado, instalando..."
		gem install lolcat
	fi
else
	echo -e " ${RED}Você não instalou o ruby, instalando..."
	sleep 1 
	
	apt install ruby -y
	if [ -e "/data/data/com.termux/files/usr/bin/lolcat" ]; then
		echo -e " ${cyan}lolcat detectado prosseguindo..."
		sleep 1
	else
		echo -e " ${RED}lolcat não detectado, instalando..."
		gem install lolcat
	fi
fi 
sleep 2
clear

apt-get install figlet -y
clear

figlet -c -f slant -t 'DOCTOR' | lolcat 

echo -e " ${blue}A instalar todas as dependências..." | lolcat -a -d 50 

echo -e " ${NOCOLOR}"
echo -e " ${cyan} Usando o comando: apt-get update"
echo -e " ${blue}"
sleep 5
apt-get update -y
sleep 2
clear
figlet -c -f slant -t 'DOCTOR' | lolcat 

echo -e " ${NOCOLOR}"
echo -e " ${cyan} Usando o comando: apt-get upgrade"
echo -e " ${blue}"
sleep 5
apt-get upgrade -y
sleep 2
clear
figlet -c -f slant -t 'DOCTOR' | lolcat 

if [ -e "$HOME/../usr/bin/nodejs" ]; then
	echo -e " ${cyan}nodejs detectado prosseguindo..."
	sleep 1
	else
		echo -e " ${RED} nodejs não detectado, instalando..."
echo -e " ${NOCOLOR}"
echo -e " ${cyan} Usando o comando: apt-get install nodejs"
echo -e " ${blue}"
sleep 5
apt-get install nodejs -y
fi
sleep 2
clear
figlet -c -f slant -t 'DOCTOR' | lolcat 

if [ -e "$HOME/../usr/bin/ffmpeg" ]; then
	echo -e " ${cyan}ffmpeg detectado prosseguindo..."
	sleep 1
	else
		echo -e " ${RED} ffmpeg não detectado, instalando..."
echo -e " ${NOCOLOR}"
echo -e " ${cyan} Usando o comando: apt-get install ffmpeg"
echo -e " ${blue}"
sleep 5
apt-get install ffmpeg -y
fi
sleep 2
clear
figlet -c -f slant -t 'DOCTOR' | lolcat 

if [ -e "$HOME/../usr/bin/wget" ]; then
	echo -e " ${cyan}wget detectado prosseguindo..."
	sleep 1
	else
		echo -e " ${RED} wget não detectado, instalando..."
echo -e " ${NOCOLOR}"
echo -e " ${cyan} Usando o comando: apt-get install wget"
echo -e " ${blue}"
sleep 5
apt-get install wget -y
fi
sleep 2
clear
figlet -c -f slant -t 'DOCTOR' | lolcat 

echo -e " ${NOCOLOR}"
echo -e " ${cyan} Usando o comando: apt-get install tesseract"
echo -e " ${blue}"
sleep 5
apt-get install tesseract -y
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
sleep 2
clear
figlet -c -f slant -t 'DOCTOR' | lolcat 

echo -e " ${NOCOLOR}"
echo -e " ${cyan} Limpando cache npm..."
echo -e " ${blue}"
sleep 5
npm cache clean -f --no-bin-links
sleep 2
clear
figlet -c -f slant -t 'DOCTOR' | lolcat 

echo -e " ${NOCOLOR}"
echo -e " ${cyan} Instalando módulos npm"
echo -e " ${blue}"

npm i node-tesseract-ocr --no-bin-links
npm install --no-bin-links
npm i --no-bin-links
sleep 2
clear
figlet -c -f slant -t 'DOCTOR' | lolcat 

echo -e " ${NOCOLOR}"
echo -e " ${cyan} Usando o comando: npm audit fix --force"
echo -e " ${blue}"
sleep 5
npm audit fix --force
sleep 2
clear

echo -e "${YELLOW} já esta acabando"
echo ""
echo ""
echo ""
echo ""
echo ""
echo ""
echo ""
echo ""
echo ""
echo ""
echo ""
echo ""
echo ""
echo ""
echo ""
figlet -c -f slant -t 'ZALTS|BOT' | lolcat 
echo ""
echo ""
echo ""
echo ""
echo ""
echo ""
echo ""
echo ""
echo ""
echo ""
echo ""
echo ""
echo ""
echo ""
echo ""
echo ""

echo -e " ${CYAN} Todas as dependências foram instaladas."
echo -e " ${RED} Atualização: mudanças mínimas"
echo -e " ${YELLOW} Use o comando: ${GREEN}npm start ${YELLOW}para iniciar o bot."

apt-get update
apt-get upgrade
apt-get install -y nodejs libwebp ffmpeg wget tesseract
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm install

echo "[*] USE node index.js PARA ESCANEAR O QR"
