import imgQrCodePlus1 from "@/assets/f3f7aeb1e1283de20f8abf69e5ddf52c04a8e872.png";
import imgImage31 from "@/assets/ef5bd0151adc335fd8c6650bac263e8df178d1af.png";

export function Footer() {
  return (
    <footer className="bg-[#465eff] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="bg-white rounded-lg p-2">
              <img 
                src={imgQrCodePlus1} 
                alt="QR Code contato"
                className="w-16 h-16"
              />
            </div>
            <div>
              <p className="text-sm mb-2">Converse com o nosso contatinho:</p>
              <div className="flex items-center gap-2">
                <img 
                  src={imgImage31} 
                  alt="WhatsApp"
                  className="w-6 h-6"
                />
                <span className="text-lg font-bold">📞 61 4004-0001</span>
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <p className="text-sm opacity-80">Sistema de Gestão de Jornadas</p>
            <p className="text-xs opacity-60">Versão 1.0.0</p>
          </div>
        </div>
      </div>
      
      <div className="bg-[#00ffe0] text-[#1653fd] text-center py-3 font-bold">
        © Banco do Brasil S/A
      </div>
    </footer>
  );
}
