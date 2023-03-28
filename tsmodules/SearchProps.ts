export interface SearchProps {
  
    
     
      setSkurlisteInfo: React.Dispatch<React.SetStateAction<string>>;
      skurlisteInfo: any;
      poster: {
        length: {
          filter(arg0: (item: any) => any): React.SetStateAction<undefined>;
          startRings: [
            {
              input: {
                type: number;
              };
            }
          ];
          rawInput: [
            {
              input: {
                type: number;
              };
              ring: {
                type: number;
              };
              shims: {
                type: number;
              };
              shims2: {
                type: number;
              };
              shims3: {
                type: number;
              };
            }
          ];
          endRings: [
            {
              input: {
                type: number;
              };
            }
          ];
          blades: {
            bladStamme: {
              type: number;
            };
          };
          header: {
            type: string;
          };
          prosent: {
            type: string;
          };
          planker: {
            type: string;
          };
          spes: {
            type: string;
          };
          nameClass: {
            type: string;
          };
          date: {
            type: Date;
          };
          editDate: {
            type: Date;
          };
        };
        filter(arg0: (item: any) => any): React.SetStateAction<undefined>;
        startRings: [
          {
            input: {
              type: number;
            };
          }
        ];
        rawInput: [
          {
            input: {
              type: number;
            };
            ring: {
              type: number;
            };
            shims: {
              type: number;
            };
            shims2: {
              type: number;
            };
            shims3: {
              type: number;
            };
          }
        ];
        endRings: [
          {
            input: {
              type: number;
            };
          }
        ];
        blades: {
          bladStamme: {
            type: number;
          };
        };
        header: {
          type: string;
        };
        prosent: {
          type: string;
        };
        planker: {
          type: string;
        };
        spes: {
          type: string;
        };
        nameClass: {
          type: string;
        };
        date: {
          type: Date;
        };
        editDate: {
          type: Date;
        };
      };
      setOpenSearchModal?: any;
      setPostInfo: React.Dispatch<React.SetStateAction<string>>;
      setSearchResultModal: React.Dispatch<React.SetStateAction<boolean>>;
      setFinalSkurlisteInfo?:  React.Dispatch<React.SetStateAction<{}>>;
      update: boolean;
      setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
      setOpenDot: any

      
}