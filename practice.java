public class practice{
    public static void main(String[] args) {
        int n = 55528;
        String s = String.valueOf(n);
        int[] arr = new int[s.length()];


        
        int score = 0;

        for (int i = 0; i <s.length(); i++) {
            arr[i] = s.charAt(i) - '0';
        }

        int friend = 0;

        for(int i=0; i<arr.length; i++){
            int count = 0;
            friend = 10 - arr[i];

            for(int j = i+1; j<arr.length; j++){
                if(arr[j] == friend){
                    count++;
                }
            }
            score += arr[i] * count;
        }

        System.out.println(score);

    }
}