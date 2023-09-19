export interface SkurlisteProps {
  
    skurliste: {
        map(arg0: (item: any) => JSX.Element): React.ReactNode;
        treslag: string;
      };
      
    
      setOpenSearchModal: React.Dispatch<React.SetStateAction<boolean>>;
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
      setPostInfo: React.Dispatch<React.SetStateAction<string>>;
      setSearchResultModal: React.Dispatch<React.SetStateAction<boolean>>;
      searchResultModal: boolean;
      setFinalSkurlisteInfo: React.Dispatch<React.SetStateAction<{}>>;
      setOpenDot: React.Dispatch<React.SetStateAction<boolean>>;
      darkMode: {
        type: any
      },
      
}